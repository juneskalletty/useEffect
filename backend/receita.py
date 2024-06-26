from flask_restx import Namespace, Resource, fields
from flask import Flask, request, jsonify
from models import Receitas, db
from sqlalchemy import func



receita_ns=Namespace('receita', description="um namespace para receitas")

receita_model=receita_ns.model(
    "Receitas",
    {
        "titulo":fields.String(),
        "descricao":fields.String()
    }
)



        
@receita_ns.route('/receitas')
class ReceitasResource(Resource):
    @receita_ns.marshal_list_with(receita_model)
    def get(self):
        questionario=Receitas.query.all()
        return questionario
