#include<iostream>
using namespace std;

void heapify(int arr[], int n, int i) {
    int largest = i;         
    int left = 2 * i + 1;     
    int right = 2 * i + 2;   

    if (left < n && arr[left] > arr[largest])
        largest = left;
    if (right < n && arr[right] > arr[largest])
        largest = right;
    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

void heapSort(int arr[], int n) {
    for (int i = n / 2 - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    int size = n;
    while (size > 1) {
        swap(arr[0], arr[size - 1]);  
        size--;                       
        heapify(arr, size, 0);       
    }
}