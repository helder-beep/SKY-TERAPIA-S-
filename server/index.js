import express from "express";
import path from "path";

const app = express();

// Serve os arquivos do frontend
app.use(express.static(path.join(__dirname, "public")));

// Qualquer rota vai abrir o index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Porta do servidor (Vercel precisa disto)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;