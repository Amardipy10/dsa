#include<iostream>
using namespace std;

void rotateone(int arr[],int n){
    int temp=arr[0];
    for(int i=0;i<n-1;i++){
        arr[i]=arr[i+1];
    }
    arr[n-1]=temp;
}
int main(){
    int arr[5]={45,34,22,78,32};
    rotateone(arr,5);
    for(int i=0;i<5;i++){
        cout<<arr[i]<<" ";
    }
}