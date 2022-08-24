let students = [
  {
    name: 'Naruto',
    note1: 7,
    note2: 10,
  },
  {
    name: 'Sasuke',
    note1: 2,
    note2: 5,
  },
  {
    name: 'Sakura',
    note1: 4,
    note2: 6,
  },
]

function note (note1, note2){
  return (Number(note1 + note2)/2)
}

function printNotes(student){
  if (note(student.note1, student.note2) >= 7) {
  alert(`A média do aluno(a) ${student.name} foi de ${note(student.note1, student.note2)} no Exame Chunin!
Parabéns ${student.name}, você foi Aprovado(a)`)
} else {(alert(`A média do(a) aluno(a) ${student.name} foi de ${note(student.note1, student.note2)} no Exame Chunin!
Não foi dessa vez ${student.name}! Tente novamente!`))
  }
}

for (let student of students) {
  printNotes(student)
}