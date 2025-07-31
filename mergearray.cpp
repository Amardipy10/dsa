#include<iostream>
using namespace std;
void mergearray(int arr1[],int arr2[],int m,int n){
    int i=m-1;
    int j=n-1;
    int k=m+n-1;
    while(i>=0 && j>=0){
        if(arr1[i]>arr2[j]){
            arr1[k]=arr1[i];
            i--;
        }
        else{
            arr1[k]=arr2[j];
            j--;
        }
        k--;
    }
    
    while(j>=0){
        arr1[k]=arr2[j];
        j--;
        k--;
    }
}

int main() {
    int arr1[10] = {1, 3, 5, 7}; 
    int arr2[3] = {2, 4, 6};     

    mergearray(arr1, arr2, 4, 3);

    cout << "Merged array: ";
    for (int i = 0; i < 7; i++) {
        cout << arr1[i] << " ";
    }
    return 0;
}