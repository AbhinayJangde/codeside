#include<stdio.h>
#include<stdlib.h>
int largest(int ar[], int n){
    int max = 0;
    for (int i = 0; i < n; i++)
    {
        if(max<ar[i]){
            max = ar[i];
        }
    }
    return max;
    
}
int main(){
    int ar[] = {3,2,1,100,10,7};
    int n = 6;
    int m = largest(ar, n);
    printf("%d",m);
    return 0;
}