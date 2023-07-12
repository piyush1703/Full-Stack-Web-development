from django.db import models

class User(models.Model):
    username = models.CharField(max_length=255, primary_key=True)
    password = models.CharField(max_length=255)
    email = models.EmailField()
    balance = models.DecimalField(max_digits=10, decimal_places=2)

class Transaction(models.Model):
    from_username = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_transactions')
    to_username = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_transactions')
    transaction_id = models.CharField(max_length=255, primary_key=True)
    amount = models.DecimalField(max_digits=10, decimal_places=2)


