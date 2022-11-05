#include<stdio.h>
#include<stdlib.h>
void printArray(int arr[], int size){
    for (int i = 0; i < size; i++)
    {
        printf("%d ",arr[i]);
    }
    printf("\n");
    // O(n)
}
void print(int arr[], int size){
    int i=0;
    while (i<size)
    {
        printf("%d ",arr[i]);
        i++;
    }
    printf("\n");
    // O(n)
    
}
int main(){
    int arr[] = {1,2,3,4,5,6,9,10,12,15};
    int size = sizeof(arr)/sizeof(arr[0]);
    // printf("%d",arr[0]);
    // printArray(arr, size);
    print(arr,size);
    return 0;
}