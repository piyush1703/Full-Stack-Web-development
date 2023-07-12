from django.urls import path
from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
    path('users/', views.get_all_users),
    path('users/<str:username>/', views.get_user),
    # Define other URL patterns for user-related endpoints

    path('transactions/', views.get_all_transactions),
    path('transactions/<str:transaction_id>/', views.get_transaction),
    # Define other URL patterns for transaction-related endpoints

     path('admin/', admin.site.urls),
]

