#include <iostream>
using namespace std;

// int binarysearch(int arr[],int n,int key){
//     int low=0;
//     int high=n-1;

//     while(low<=high){
//         int mid=low+(high-low)/2;
//         if (arr[mid]==key){
//             return mid;
//         }
//         if(arr[mid]<key){
//             low=mid+1;
//         }
//         else{
//             high=mid-1;
//         }
//     }
//     return -1;
// }



// void bubble_sort(int arr[],int n){
//     for(int i=0;i<n-1;i++){
//         for(int j=0;j<n-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 swap(arr[j],arr[j+1]);
//             }
//         }
//     }
// }



// int partition(int arr[],int low,int high){
//     int i=low-1;
//     int pivot=arr[high];
//     for(int j=low;j<high;j++){
//         if(arr[j]<pivot){
//             i++;
//             swap(arr[i],arr[j]);
//         }

//     }
//     swap(arr[i+1],arr[high]);
//     return i+1;
// }

// void quicksort(int arr[],int low,int high){
//     if(low<high){
//         int pi=partition(arr,low,high);
//         quicksort(arr,low,pi-1);
//         quicksort(arr,pi+1,high);
//     }
// }



// int linearsearch(int arr[],int key,int n){
//     for (int i=0;i<n;i++){
//         if(arr[i]==key){
//             return i;
//         }
//     }
//     return -1;
// }



// int fibonacciSearch(int arr[], int n, int key) {
//     int fib2 = 0;
//     int fib1 = 1;
//     int fib = fib1 + fib2;
//     while (fib < n) {
//         fib2 = fib1;
//         fib1 = fib;
//         fib = fib1 + fib2;
//     }
//     int offset = -1;
//     while (fib > 1) {
//         int i = min(offset + fib2, n - 1);
//         if (arr[i] < key) {
//             fib = fib1;
//             fib1 = fib2;
//             fib2 = fib - fib1;
//             offset = i;
//         }
//         else if (arr[i] > key) {
//             fib = fib2;
//             fib1 = fib1 - fib2;
//             fib2 = fib - fib1;
//         }
//         else {
//             return i;
//         }
//     }
//     if (fib1 && offset + 1 < n && arr[offset + 1] == key)
//         return offset + 1;

//     return -1;
// // }



// void insertion_sort(int arr[],int n){
//     for(int i=1;i<n;i++){
//         int key=arr[i];
//         int j=i-1;
//     while(j>=0 && arr[j]>key){
//         arr[j+1]=arr[j];
//         j--;
//     }
//     arr[j+1]=key;
//     }
// }



// void selection_sort(int arr[],int n){
//     for (int i=0;i<n-1;i++){
//         int minIndex=i;
//         for (int  j = i+1; j < n; j++)
//         {
//             if(arr[j]<arr[minIndex]){
//                 minIndex=j;
//             }
//         }
//          swap(arr[i],arr[minIndex]);
//     }
// }



// void merge(int left,int right,int arr[],int mid){
//     int n1=mid-left+1;
//     int n2=right-mid;
//     int l1[n1];
//     int l2[n2];
//     for(int i=0;i<n1;i++){
//         l1[i]=arr[left+i];
//     }
//     for(int i=0;i<n2;i++){
//         l2[i]=arr[mid+1+i];
//     }
//     int i=0;int j=0; int k=left;
//     while(i<n1 && j<n2){
//         if(l1[i]<l2[j]){
//             arr[k++]=l1[i++];
//         }
//         else {
//             arr[k++]=l2[j++];
//         }
//     }
//     while(i<n1){
//         arr[k++]=l1[i++];
//     }
//     while(j<n2){
//         arr[k++]=l2[j++];
//     }
// }
// void mergesort(int left,int right,int arr[]){
//     if(left<right){
//     int mid=left+(right-left)/2;
//     mergesort(left,mid,arr);
//     mergesort(mid+1,right,arr);
//     merge(left,right,arr,mid);
//     }
// }



// void heapify(int arr[], int n, int i) {
//     int largest = i;         
//     int left = 2 * i + 1;     
//     int right = 2 * i + 2;   

//     if (left < n && arr[left] > arr[largest])
//         largest = left;
//     if (right < n && arr[right] > arr[largest])
//         largest = right;
//     if (largest != i) {
//         swap(arr[i], arr[largest]);
//         heapify(arr, n, largest);
//     }
// }

// void heapSort(int arr[], int n) {
//     for (int i = n / 2 - 1; i >= 0; i--) {
//         heapify(arr, n, i);
//     }
//     int size = n;
//     while (size > 1) {
//         swap(arr[0], arr[size - 1]);  
//         size--;                       
//         heapify(arr, size, 0);       
//     }
// }

int main(){
    int a=10;
    int* ptr=&a;
    cout<<ptr<<endl;
    cout<<&a<<endl;;
    cout<<*(&a)<<endl;
    cout<<*(ptr)<<endl;

    int* ptr2=NULL;
    cout<<ptr2;

    return 0;
}