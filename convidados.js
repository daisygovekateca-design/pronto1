// Base de Dados dos Convidados e Mesas para o Protocolo
const dadosMesasIniciais = [
  {
    mesa: "Mesa 1 — Rubi Real",
    convidados: [
      { id: 1, nome: "Maria Amélia", acompanhantes: "Jaime Manganhelas", acomodado: false },
      { id: 2, nome: "Chamaúne Saiete", acompanhantes: "Maria de Fátima", acomodado: false },
      { id: 3, nome: "Emídio Macie", acompanhantes: "Erzilia Alice", acomodado: false },
      { id: 4, nome: "Avó Fátima", acompanhantes: "Avó Amélia", acomodado: false },
      { id: 5, nome: "Avô Aníbal", acompanhantes: "Avó Vitória", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 2 — Diamante",
    convidados: [
      { id: 6, nome: "Anabela Mendes", acompanhantes: "-", acomodado: false },
      { id: 7, nome: "Rui Mate", acompanhantes: "Esposa", acomodado: false },
      { id: 8, nome: "Abílio Mate", acompanhantes: "Esposa", acomodado: false },
      { id: 9, nome: "Olga Alice", acompanhantes: "Júlio Mabunda", acomodado: false },
      { id: 10, nome: "Borges Paulo", acompanhantes: "Esposa", acomodado: false },
      { id: 11, nome: "1 convidado por confirmar", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 3 — Esmeralda",
    convidados: [
      { id: 12, nome: "Edmundo Mate", acompanhantes: "Esposa", acomodado: false },
      { id: 13, nome: "Lurdes Mate", acompanhantes: "-", acomodado: false },
      { id: 14, nome: "Mauro Mate", acompanhantes: "Esposa", acomodado: false },
      { id: 15, nome: "Maria Celeste Mate", acompanhantes: "-", acomodado: false },
      { id: 16, nome: "Ivan Mendes", acompanhantes: "-", acomodado: false },
      { id: 17, nome: "Letícia Mendes", acompanhantes: "-", acomodado: false },
      { id: 18, nome: "Solange Mendes", acompanhantes: "-", acomodado: false },
      { id: 19, nome: "Bruno Mate", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 4 — Safira",
    convidados: [
      { id: 20, nome: "Salima Saieti", acompanhantes: "Salvador", acomodado: false },
      { id: 21, nome: "Abdul Saieti", acompanhantes: "Julieta", acomodado: false },
      { id: 22, nome: "Adamo Saieti", acompanhantes: "Zulmira Saieti", acomodado: false },
      { id: 23, nome: "Jamila Saieti", acompanhantes: "Arone Manhiça", acomodado: false },
      { id: 24, nome: "Mohammed Saieti", acompanhantes: "Fátima Saieti", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 5 — Alexandrita",
    convidados: [
      { id: 25, nome: "Abubacar Saieti", acompanhantes: "-", acomodado: false },
      { id: 26, nome: "Salimo", acompanhantes: "Milonga", acomodado: false },
      { id: 27, nome: "Adilson Tembe", acompanhantes: "Alzira", acomodado: false },
      { id: 28, nome: "Yolanda Nhassengo", acompanhantes: "Esposo", acomodado: false },
      { id: 29, nome: "Marinela Langa", acompanhantes: "-", acomodado: false },
      { id: 30, nome: "Cátia", acompanhantes: "-", acomodado: false },
      { id: 31, nome: "Rihanna Saieti", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 6 — Turmalina Rosa",
    convidados: [
      { id: 32, nome: "Savata", acompanhantes: "Esposo", acomodado: false },
      { id: 33, nome: "Vera", acompanhantes: "António", acomodado: false },
      { id: 34, nome: "Edna", acompanhantes: "-", acomodado: false },
      { id: 35, nome: "Daisy", acompanhantes: "Atanásio", acomodado: false },
      { id: 36, nome: "Florência Ângela", acompanhantes: "-", acomodado: false },
      { id: 37, nome: "Zanguiwe", acompanhantes: "-", acomodado: false },
      { id: 38, nome: "Medelina Nhambe", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 7 — Topázio Dourado",
    convidados: [
      { id: 39, nome: "Zulmira Machado", acompanhantes: "-", acomodado: false },
      { id: 40, nome: "Alice Langa", acompanhantes: "-", acomodado: false },
      { id: 41, nome: "Auristela Langa", acompanhantes: "-", acomodado: false },
      { id: 42, nome: "Anselmo Langa", acompanhantes: "Esposa", acomodado: false },
      { id: 43, nome: "Vivita", acompanhantes: "Esposo", acomodado: false },
      { id: 44, nome: "Giné", acompanhantes: "Esposo", acomodado: false },
      { id: 45, nome: "Zito Machado", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 8 — Ametista",
    convidados: [
      { id: 46, nome: "Abílio Langa", acompanhantes: "Esposa", acomodado: false },
      { id: 47, nome: "André", acompanhantes: "Esposa", acomodado: false },
      { id: 48, nome: "Bernardo", acompanhantes: "Esposa", acomodado: false },
      { id: 49, nome: "Otília", acompanhantes: "Esposo", acomodado: false },
      { id: 50, nome: "Paulinha", acompanhantes: "Esposo", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 9 — Granada",
    convidados: [
      { id: 51, nome: "Aurélio Cossa", acompanhantes: "Catarina Alice", acomodado: false },
      { id: 52, nome: "Bento", acompanhantes: "Wema", acomodado: false },
      { id: 53, nome: "Luís Cossa", acompanhantes: "Siloca Manjate", acomodado: false },
      { id: 54, nome: "Jorge Mabjaia", acompanhantes: "Wilza", acomodado: false },
      { id: 55, nome: "Edson Cossa", acompanhantes: "Konoya André", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 10 — Morganita",
    convidados: [
      { id: 56, nome: "Tânia", acompanhantes: "Esposo", acomodado: false },
      { id: 57, nome: "Nélio Cossa", acompanhantes: "Parceira", acomodado: false },
      { id: 58, nome: "Helena", acompanhantes: "Ramos", acomodado: false },
      { id: 59, nome: "Fitchy", acompanhantes: "-", acomodado: false },
      { id: 60, nome: "Maya", acompanhantes: "-", acomodado: false },
      { id: 61, nome: "Gizela", acompanhantes: "Esposo", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 11 — Água-Marinha",
    convidados: [
      { id: 62, nome: "Yumina", acompanhantes: "-", acomodado: false },
      { id: 63, nome: "Mariamo Saieti", acompanhantes: "-", acomodado: false },
      { id: 64, nome: "Dércio Saieti", acompanhantes: "-", acomodado: false },
      { id: 65, nome: "Yonisse Cumbana", acompanhantes: "Carlos", acomodado: false },
      { id: 66, nome: "Vinícius Saieti", acompanhantes: "Sousa", acomodado: false },
      { id: 67, nome: "Yasser Saieti", acompanhantes: "Yumus Saieti", acomodado: false },
      { id: 68, nome: "Diana", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 12 — Citrino",
    convidados: [
      { id: 69, nome: "Clemenci Cumbana", acompanhantes: "-", acomodado: false },
      { id: 70, nome: "Alberto", acompanhantes: "Esposa", acomodado: false },
      { id: 71, nome: "Graça", acompanhantes: "Domingos", acomodado: false },
      { id: 72, nome: "Bambo", acompanhantes: "Esposa", acomodado: false },
      { id: 73, nome: "Fortunato", acompanhantes: "Esposa", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 13 — Opala",
    convidados: [
      { id: 74, nome: "Salomão Macie", acompanhantes: "Paula", acomodado: false },
      { id: 75, nome: "Paulo Macie", acompanhantes: "Neide", acomodado: false },
      { id: 76, nome: "Catarina", acompanhantes: "Esposo", acomodado: false },
      { id: 77, nome: "Rosa Macie", acompanhantes: "Esposo", acomodado: false },
      { id: 78, nome: "Linda", acompanhantes: "Esposo", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 14 — Pérola",
    convidados: [
      { id: 79, nome: "Alberto Macie", acompanhantes: "Esposa", acomodado: false },
      { id: 80, nome: "Helena", acompanhantes: "Esposo", acomodado: false },
      { id: 81, nome: "Casimiro", acompanhantes: "Esposa", acomodado: false },
      { id: 82, nome: "Alfredo", acompanhantes: "Esposa", acomodado: false },
      { id: 83, nome: "Isabel", acompanhantes: "Lolita", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 15 — Quartzo Rosa",
    convidados: [
      { id: 84, nome: "Cláudio", acompanhantes: "Esposa", acomodado: false },
      { id: 85, nome: "Martinha", acompanhantes: "-", acomodado: false },
      { id: 86, nome: "Adriana", acompanhantes: "-", acomodado: false },
      { id: 87, nome: "Andreia", acompanhantes: "Esposo", acomodado: false },
      { id: 88, nome: "Sasha", acompanhantes: "Esposo", acomodado: false },
      { id: 89, nome: "Gleyds", acompanhantes: "Esposo", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 16 — Tanzanita",
    convidados: [
      { id: 90, nome: "Arsénio", acompanhantes: "Esposa", acomodado: false },
      { id: 91, nome: "Pilo", acompanhantes: "Esposa", acomodado: false },
      { id: 92, nome: "Celso", acompanhantes: "Esposa", acomodado: false },
      { id: 93, nome: "Dulce", acompanhantes: "Esposo", acomodado: false },
      { id: 94, nome: "Sheila", acompanhantes: "-", acomodado: false },
      { id: 95, nome: "Zinha", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 17 — Espinélio",
    convidados: [
      { id: 96, nome: "Leonor", acompanhantes: "-", acomodado: false },
      { id: 97, nome: "Evelisa", acompanhantes: "-", acomodado: false },
      { id: 98, nome: "Elisa", acompanhantes: "-", acomodado: false },
      { id: 99, nome: "Fátima", acompanhantes: "-", acomodado: false },
      { id: 100, nome: "Lúcia", acompanhantes: "Esposo", acomodado: false },
      { id: 101, nome: "Teté", acompanhantes: "Eulália Langa", acomodado: false },
      { id: 102, nome: "Estevão", acompanhantes: "Esposa", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 18 — Turquesa",
    convidados: [
      { id: 103, nome: "Anita", acompanhantes: "Andreia", acomodado: false },
      { id: 104, nome: "Dórico", acompanhantes: "Esposa", acomodado: false },
      { id: 105, nome: "Mãezinha", acompanhantes: "Alice", acomodado: false },
      { id: 106, nome: "Bela", acompanhantes: "Esposo", acomodado: false },
      { id: 107, nome: "Maurício", acompanhantes: "Esposa", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 19 — Jade Imperial",
    convidados: [
      { id: 108, nome: "Circe", acompanhantes: "-", acomodado: false },
      { id: 109, nome: "Pércia", acompanhantes: "Esposo", acomodado: false },
      { id: 110, nome: "Benilde", acompanhantes: "Esposo", acomodado: false },
      { id: 111, nome: "Cuinica", acompanhantes: "Esposo", acomodado: false },
      { id: 112, nome: "Florência", acompanhantes: "Mayra", acomodado: false },
      { id: 113, nome: "Rosa", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 20 — Ónix",
    convidados: [
      { id: 114, nome: "Henrique David", acompanhantes: "Esposa", acomodado: false },
      { id: 115, nome: "Menalda", acompanhantes: "Esposo", acomodado: false },
      { id: 116, nome: "Arão Chiluvane", acompanhantes: "Esposa", acomodado: false },
      { id: 117, nome: "Refa", acompanhantes: "Esposo", acomodado: false },
      { id: 118, nome: "Rita", acompanhantes: "-", acomodado: false },
      { id: 119, nome: "Evelina", acompanhantes: "-", acomodado: false }
    ]
  },
  {
    mesa: "Mesa 21 — Lazúli",
    convidados: [
      { id: 120, nome: "Rita Naftal", acompanhantes: "-", acomodado: false },
      { id: 121, nome: "Júlia Chavel", acompanhantes: "-", acomodado: false },
      { id: 122, nome: "Zuraida Mussa", acompanhantes: "-", acomodado: false }
    ]
  }
];