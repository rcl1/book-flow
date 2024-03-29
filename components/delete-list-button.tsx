"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import axios from "axios";
import { TrashIcon } from "lucide-react";
import { useState } from "react";

interface DeleteListButtonProps {
  listId: string;
  name: string;
  setRefresh: (state: boolean) => void;
}
const DeleteListButton = ({
  listId,
  name,
  setRefresh,
}: DeleteListButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <span
        className="font-semibold text-xl cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <TrashIcon />
      </span>
      <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              Are you sure you want to delete{" "}
              <span className="uppercase">{name}</span> ?
            </DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant={"destructive"}
              disabled={loading}
              onClick={async () => {
                setLoading(true);
                await axios.delete(`/api/list/${listId}`);
                setLoading(false);
                setIsOpen(false);
                window.location.reload();
              }}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteListButton;
