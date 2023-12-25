"use client"

// firebase
import { collection, doc, addDoc, updateDoc, getDoc, getDocs } from "firebase/firestore";
import { auth } from "@/lib/firebase";
import { db } from "@/lib/firebase";

// for react hooks
import { useEffect, useState } from "react";

// for shadcn
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { toast } from "@/components/ui/use-toast"
import { Skeleton } from "@/components/ui/skeleton";

const formSchema = z.object({
  'question-1': z.string().min(10).max(1000)
})

const questionsSet = [
  {
    question: "Tell our AI about anything, be it your wildest dream, or your deepest fear. The more you show, the more accurate the genres recommendation will be.",
  }
]

export default function PersonalityTest() {


  // nested state for the user genres
  const [userGenres, setUserGenres] = useState<string[]>([]);
  const [formDisabled, setFormDisabled] = useState<boolean>(false);


  // useeffect to get the user personality type
  useEffect(() => {
    // action on update
    if (userGenres.length > 0) {
      toast({
        title: "Your book genre is ...",
        description: (
          <>
            {
              userGenres.map((genre, index) => {
                return (
                  <div>
                    <span key={index}>{genre.split("@")[0]}</span>
                    <span> with a confidence of {parseFloat(genre.split("@")[1]).toFixed(2)}</span>
                  </div>
                )
              })
            }
          </>
        ),
      })
      updateToFirebase();
    }
}, [userGenres]);


// 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      'question-1': "",
    },
  })


  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {

    getRecommnedationGenres(values["question-1"]);

    updateToFirebase();
  }


  async function getRecommnedationGenres(question: string) {

    // disable the form while waiting for the response
    setFormDisabled(true);

    // wait/sleep
    // await new Promise(r => setTimeout(r, 100000));

    const stagingQuery = "https://ekaterina2.pythonanywhere.com/question/" + question;
    // const stagingQuery = "https://ekaterina2.pythonanywhere.com/"

    toast({
      title: "Our AI is thinking ...",
      description: (
        <>
          <div>{stagingQuery}</div>
        </>
      ),
    })

    setUserGenres([]);

    await fetch(stagingQuery, {
      method: "GET",
    }).then(async (response) => {
      const data = await response.json();

      // changed from data.length to 3
      for (let i = 0; i < 3; i++) {
        const genre = data[i][0] + "@" + data[i][1];
        await setUserGenres((userGenres) => [...userGenres, genre]);
      }

    }).catch(error => {
      console.error("Failed to fetch recommendation genres:", error)
    });

    // enable the form
    setFormDisabled(false);
  }


  async function updateToFirebase() {
    const user = auth.currentUser;

    const tempGenres = userGenres.map((genre) => {
      return genre.split("@")[0];
    })

    if (user) {
      const userID : string = await user.uid;

      // find the genre ID based on genre name
      const genreRef = collection(db, "genre");
      const genreQuery = await getDocs(genreRef);
      let genreID : string[] = [];
      genreQuery.forEach((doc) => {
        if (tempGenres.includes(doc.data().name)) {
          genreID.push(doc.id);
        }
      });


      // find the document with the same userID
      const docRef = doc(db, "user", userID);
      const docSnap = await getDoc(docRef);

      // create preferredGenre if it doesn't exist
      if (docSnap.data()?.preferredGenre == undefined) {
        await updateDoc(docRef, {
          preferredGenre: genreID,
        });
      } else {
        await updateDoc(docRef, {
          preferredGenre: genreID,
        });
      }


    } else {
      toast({
        description: "You have to login to save your preferred genres",
      })
    }
  }


  return (
    <div className="mx-auto py-5 px-4 lg:max-w-6xl lg:px-0 flex flex-col justify-center items-center border-slate-100 border-2 shadow-lg rounded-2xl bg-slate-200">
      {formDisabled ? (
        <Skeleton className="h-[136px] w-11/12 m-auto" />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="lg:w-11/12 space-y-6">
            <fieldset disabled={formDisabled} className="space-y-6">
                {
                  questionsSet.map((question, index) => {
                    return (
                      <FormField
                        key={index}
                        control={form.control}
                        name="question-1"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm md:text-md lg:text-lg">{question.question}</FormLabel>
                            <FormControl>
                              <Input placeholder="Your answer" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )
                  })
                }
              <div className="flex justify-center">
                <Button type="submit" className="w-40 h-auto">Submit</Button>
              </div>
            </fieldset>
          </form>
        </Form>
      )}
    </div>
  )
}
