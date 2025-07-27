#include<iostream>
using namespace std;

void merge(int left,int right,int arr[],int mid){
    int n1=mid-left+1;
    int n2=right-mid;
    int l1[n1];
    int l2[n2];
    for(int i=0;i<n1;i++){
        l1[i]=arr[left+i];
    }
    for(int i=0;i<n2;i++){
        l2[i]=arr[mid+1+i];
    }
    int i=0;int j=0; int k=left;
    while(i<n1 && j<n2){
        if(l1[i]<l2[j]){
            arr[k++]=l1[i++];
        }
        else {
            arr[k++]=l2[j++];
        }
    }
    while(i<n1){
        arr[k++]=l1[i++];
    }
    while(j<n2){
        arr[k++]=l2[j++];
    }
}
void mergesort(int left,int right,int arr[]){
    if(left<right){
    int mid=left+(right-left)/2;
    mergesort(left,mid,arr);
    mergesort(mid+1,right,arr);
    merge(left,right,arr,mid);
    }
}