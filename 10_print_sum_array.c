#include<stdio.h>
#include<stdlib.h>
int sumArray(int arr[], int n){
    int sum = 0;
    for (int i = 0; i < n; i++)
    {
        sum = sum + arr[i];
    }
    return sum;
    
}
int main(){
    int arr[] = {10,20,10,10};
    int n = sizeof(arr)/sizeof(arr[0]);
    int result = sumArray(arr, n);
    printf("Sum = %d", result);
    return 0;
}