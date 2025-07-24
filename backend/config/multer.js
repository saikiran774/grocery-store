// import multer from "multer";
// const storage = multer.diskStorage({
//   destination: "uploads",
//   filename: (req, file, cb) => {
//     return cb(null, `${Date.now()}${file.originalname}`);
//   },
// });
//   export const upload = multer({ storage: storage });
 
// backend/config/multer.js ✅
import multer from "multer";

const storage = multer.memoryStorage(); // Stores file in RAM (no disk write)
export const upload = multer({ storage });


