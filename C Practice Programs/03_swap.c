#include<stdio.h>
void swap(int x, int y){
    printf("without swapping: a = %d and b = %d\n",x,y);
    int t;
    t = x;
    x = y;
    y = t;
    printf("after swapping: a = %d and b = %d",x,y);

}
int main(){
    // int a = 5, b = 10;
    // printf("without swapping: a = %d and b = %d\n",a,b);
    // int temp;
    // temp = a;
    // a = b;
    // b = temp;
    // printf("after swapping: a = %d and b = %d",a,b);

    swap(4,5);

    return 0;
}