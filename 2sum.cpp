#include<iostream>
using namespace std;

int twosum(int arr[],int n,int target){
    for(int i=0;i<n;i++){
        for(int j=1+i;j<n;j++){
            if(arr[i]+arr[j]==target){
                return 1;
            }
        }
    }
    return -1;
}


// int main(){
//     int arr[5]={4,3,6,7,2};
//     cout<<twosum(arr,5,15);
//     return 0;

// }

int twosum(int arr[],int n,int target){
    int start=0;
    int end=n-1;
    sort(arr,arr+n);
    while(start<end){
        if(arr[start]+arr[end]==target){
            return(1);
        }
        else if(arr[start]+arr[end]<target){
            start++;
        }
        else{
            end--;
        }
    }
    return -1;
}
