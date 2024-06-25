from exts import db


class Receitas(db.Model):
    id=db.Column(db.Integer(),primary_key=True)
    titulo=db.Column(db.Text(),nullable=False)
    descricao=db.Column(db.Text(),nullable=False)
    

    def __repr__(self):
        return f"<id de receita{self.id}>"
  
    def save(self):
        db.session.add(self)
        db.session.commit()