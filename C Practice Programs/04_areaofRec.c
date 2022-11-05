#include<stdio.h>
#include<stdlib.h>

int main(){
    int h,w;
    printf("Enter the widht of rec: ");
    scanf("%d",&w);
    printf("Enter the height of rec: ");
    scanf("%d",&h);
    int a = h*w;
    printf("The area of rec: %d",a);
    return 0;
}