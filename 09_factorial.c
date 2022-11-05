#include<stdio.h>
#include<stdlib.h>
int factorial(int n){
    if(n == 0 || n == 1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}
int main(){
    int n;
    printf("Enter a number to calculate factorial: ");
    scanf("%d", &n);
    int result = factorial(n);
    printf("factorial = %d", result);
    return 0;
}