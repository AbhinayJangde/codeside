#include<stdio.h>
#include<stdlib.h>
int average(int a, int b, int c){
    return (a+b+c)/3;
}
int main(){
    int val = average(4,2,2); // 6/3 = 2
    printf("the average is = %d",val);
    return 0;
}