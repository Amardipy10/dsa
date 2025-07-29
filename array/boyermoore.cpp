#include<iostream>
using namespace std;

void majority_element(int arr[], int n) {
    int candidate = 0;
    int count = 0;

    // Step 1: Find a candidate
    for (int i = 0; i < n; i++) {
        if (count == 0) {
            candidate = arr[i];
            count = 1; // fix: should reset count to 1
        }
        else if (arr[i] == candidate) {
            count++;
        }
        else {
            count--;
        }
    }

    // Step 2: Verify the candidate
    count = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] == candidate) {
            count++;
        }
    }

    if (count > n / 2) {
        cout << "Majority element is: " << candidate << endl;
    } else {
        cout << "No majority element found." << endl;
    }
}