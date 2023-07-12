from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User, Transaction
from .serializers import UserSerializer, TransactionSerializer

@api_view(['GET'])
def get_all_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_user(request, username):
    try:
        user = User.objects.get(username=username)
    except User.DoesNotExist:
        return Response(status=404)
    serializer = UserSerializer(user)
    return Response(serializer.data)

# Define other API endpoints (create, delete, update) using similar patterns

@api_view(['GET'])
def get_all_transactions(request):
    transactions = Transaction.objects.all()
    serializer = TransactionSerializer(transactions, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_transaction(request, transaction_id):
    try:
        transaction = Transaction.objects.get(transaction_id=transaction_id)
    except Transaction.DoesNotExist:
        return Response(status=404)
    serializer = TransactionSerializer(transaction)
    return Response(serializer.data)

# Define other API endpoints (create) using similar patterns


