#include<iostream>
#include<climits> 
using namespace std;
int max_sub_arr(int arr[],int n){
    int maximum=INT_MIN;
    int sum=0;
    for(int i=0;i<n;i++){
        sum+=arr[i];
        maximum=max(sum,maximum);
        if(sum<0){
            sum=0;
        }
    }
    return maximum;
}
int main(){
    int arr[5]={22,-23,45,12,7};
    cout<<max_sub_arr(arr,5);
}