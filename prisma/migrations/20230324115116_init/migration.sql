-- CreateTable
CREATE TABLE "Livros" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "dataCriacao" DATETIME NOT NULL,
    "isbn" INTEGER NOT NULL,
    "autorId" INTEGER NOT NULL,
    CONSTRAINT "Livros_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Autor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Autor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Livros_isbn_key" ON "Livros"("isbn");
