import sys
from flask import Blueprint
from .sequence_handlers import handle_arithmetic_sequence, handle_geometric_sequence

sequence = Blueprint('sequence', __name__)

@sequence.route('/arithmetic')
def arithmetic(): return handle_arithmetic_sequence()

@sequence.route('/geometric')
def geometric(): return handle_geometric_sequence()
