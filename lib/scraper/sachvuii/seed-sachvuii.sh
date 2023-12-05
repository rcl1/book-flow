#!/bin/bash

# Windows
cd "C:\Users\quinn\Desktop\sepm\book-flow\lib"
# WSL2
cd "/mnt/c/Users/quinn/Desktop/sepm/book-flow/lib"

npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\am-thuc-nau-an.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\co-tich-than-thoai.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\cong-nghe-thong-tin.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\hoc-ngoai-ngu.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\hoi-ky-tuy-but.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\khac.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\khoa-hoc-ky-thuat.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\kien-truc-xay-dung.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\kinh-te-quan-ly.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\lich-su-chinh-tri.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\marketing-ban-hang.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\nong-lam-ngu.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\phieu-luu-mao-hiem.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\tai-lieu-hoc-tap.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\tam-ly-ky-nang-song.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\the-thao-nghe-thuat.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\tieu-thuyet-trung-quoc.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\triet-hoc.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\truyen-cuoi-tieu-lam.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\van-hoa-ton-giao.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\van-hoc-viet-nam.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v3\y-hoc-suc-khoe.json" --yes

# v3
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\book-flow\lib\scraper\sachvuii\json\author.json" --yes && npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\book-flow\lib\scraper\sachvuii\json\book.json" --yes && npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\book-flow\lib\scraper\sachvuii\json\genre.json" --yes

# v4
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\book-flow\lib\scraper\sachvuii\json\author-1.json" --yes && npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\book-flow\lib\scraper\sachvuii\json\author-2.json" --yes && npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\book-flow\lib\scraper\sachvuii\json\author-3.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\book-flow\lib\scraper\sachvuii\json\genre.json" --yes
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\book-flow\lib\scraper\sachvuii\json\book.json" --yes

# Export backup
npx -p node-firestore-import-export firestore-export -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v2\BACKUP-2023-12-03.json" --yes

# Import backup
npx -p node-firestore-import-export firestore-import -a bookflow-e7dbd-firebase-adminsdk-vhk4z-87018ee525.json -b "C:\Users\quinn\Desktop\sepm\json-v2\BACKUP-2023-11-30.json" --yes
