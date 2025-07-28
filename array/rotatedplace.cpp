#include<iostream>
using namespace std;

void rotate_array(int arr[],int start,int end){
    while(start<end){
        swap(arr[start],arr[end]);
        start++;
        end--;
    }
}

void rotate_d_place(int arr[],int d,int n){
    rotate_array(arr,0,d-1);
    rotate_array(arr,d,n-1);
    rotate_array(arr,0,n-1);
}

int main(){
    int arr[10]={34,45,55,32,11,61,321,45,322,111};
    rotate_d_place(arr,4,10);

    for(int i=0;i<10;i++){
        cout<<arr[i]<<" ";
    }
    return 0;
}