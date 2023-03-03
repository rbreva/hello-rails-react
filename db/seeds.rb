Message.destroy_all

Message.create!([
  {
    msg: "¡Hola Mundo!"
  },
  {
    msg: "Hello World!"
  },
  {
    msg: "Hallo Welt!"
  },
  {
    msg: "Pozdrav svijete!"
  },
  {
    msg: "Olá mundo!"
  }
])

p "Created #{Message.count} msgs"
