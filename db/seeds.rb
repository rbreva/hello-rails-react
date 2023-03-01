Message.destroy_all

Message.create!([
  {
    msg: "Primer Mensaje"
  },
  {
    msg: "Segundo Mensaje"
  },
  {
    msg: "Tercer Mensaje"
  },
  {
    msg: "Cuarto Mensaje"
  },
  {
    msg: "Quinto Mensaje"
  }
])

p "Created #{Message.count} msgs"
