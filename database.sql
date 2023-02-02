CREATE TABLE "koala_table" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "gender" VARCHAR(10) NOT NULL,
    "age" INTEGER,
    "ready_to_transfer" BOOLEAN,
    "notes" VARCHAR(130) NOT NULL
);

INSERT INTO "koala_table" ("name", "gender", "age", "ready_to_transfer", "notes")
VALUES 
('Scotty', 'M', 4, true, 'Born in Guatemala'),
('Jean', 'F', 5, true, 'Allergic to lots of lava'),
('Ororo', 'F', 7, false, 'Loves listening to Paula (Abdul)'),
('Logan', 'M', 15, false, 'Loves the sauna'),
('Charlie', 'M', 9, true, 'Favorite band is Nirvana'),
('Betsy', 'F', 4, true, 'Has a pet iguana');