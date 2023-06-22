import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log("db connect");
  } catch (error) {
    throw new Error("Connection failed!:(");
  }
};

export default dbConnect;

// import mongoose from "mongoose";

// const MONGO = process.env.MONGO;

// if (!MONGO) {
//   throw new Error(
//     "Please define the MONGO environment variable inside .env.local"
//   );
// }

// /**
//  * Global is used here to maintain a cached connection across hot reloads
//  * in development. This prevents connections growing exponentially
//  * during API Route usage.
//  */
// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }

//   if (!cached.promise) {
//     const opts = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGO, opts).then((mongoose) => {
//       return mongoose;
//     });
//   }

//   try {
//     cached.conn = await cached.promise;
//   } catch (e) {
//     cached.promise = null;
//     throw e;
//   }
//   console.log("on connect db");

//   return cached.conn;
// }

// export default dbConnect;
