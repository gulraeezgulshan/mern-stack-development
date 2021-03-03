const config = {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT || 3500,
  jwtSecret: process.env.JWT_SECRET || "9876543210123456789",
  jwtAlgorithm: "HS256",
  mongoAtlasUri:
    "mongodb+srv://gulraiz:10011988@cluster0.6ihvf.mongodb.net/mernproject?retryWrites=true&w=majority",
  mongoUri:
    process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    "mongodb://" +
      (process.env.IP || "localhost") +
      ":" +
      (process.env.MONGO_PORT || "27017") +
      "/mernproject",
};

/* const config = {
  env: "development",
  port: 3000,
  jwtSecret: "YOUR_secret_key",
  mongoUri: "mongodb://localhost:27017/mernproject",
};
 */
export default config;
