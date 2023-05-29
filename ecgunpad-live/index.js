require("dotenv").config();

const io = require("socket.io")(process.env.SOCKET_IO_PORT, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mariadb",
  }
);

async function testDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testDatabase();

const redisAdapter = require("socket.io-redis");
io.adapter(
  redisAdapter({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    user: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
  })
);

const mqtt = require("mqtt");

let mqttClient = mqtt.connect(
  `mqtt://${process.env.MQTT_HOST}:${process.env.MQTT_PORT}`,
  {
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD,
  }
);

mqttClient.on("connect", () => {
  mqttClient.subscribe("ecg/live", function (err) {
    if (!err) console.log("Success subscribing to 'ecg/live'");
  });
  mqttClient.subscribe("ecg/analysis", function (err) {
    if (!err) console.log("Success subscribing to 'ecg/analysis'");
  });
});

mqttClient.on("message", (topic, message) => {
  if (topic == "ecg/live") {
    io.emit("ceksocketio", message.toString());
    console.log(message.toString().substring(0, 20));
  } else if (topic == "ecg/analysis") {
    io.emit("ecganalysis", message.toString());
    console.log(message.toString().substring(0, 20));
  }
});
