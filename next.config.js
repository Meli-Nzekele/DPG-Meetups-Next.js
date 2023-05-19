/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    mongoDB_username: "DevopsPG", 
    mongoDB_password: "dpg2023",
    mongoDB_cluster: "INSTER", 
    mongoDB_database: "INSERT",
  }
}

module.exports = nextConfig
