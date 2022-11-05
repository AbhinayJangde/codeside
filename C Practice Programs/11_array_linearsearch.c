#include<stdio.h>
#include<stdlib.h>
void linearSearch(int arr[], int n, int key)
{
    for (int i = 0; i < n; i++)
    {
        if(arr[i] == key)
        {
            printf("%d is exist at index = %d",arr[i],i);
            return;
        }
    }
    printf("%d is not exist!", key);
}
int main(){
    int arr[] = {1,4,2,6,7,12,9};
    int size = sizeof(arr)/sizeof(arr[0]);
    // printf("%d", size);
    linearSearch(arr, size, 60);
    return 0;
}