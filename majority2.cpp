#include<iostream>
using namespace std;

void majority2(int arr[], int n) {
    for (int i = 0; i < n; i++) {
        int count = 0;
        
        // Skip already processed elements
        bool alreadyCounted = false;
        for (int k = 0; k < i; k++) {
            if (arr[k] == arr[i]) {
                alreadyCounted = true;
                break;
            }
        }
        if (alreadyCounted) continue;

        // Count occurrences
        for (int j = 0; j < n; j++) {
            if (arr[i] == arr[j]) {
                count++;
            }
        }

        if (count > n / 3) {
            cout << arr[i] << endl;
        }
    }
}

int main() {
    int arr[5] = {10, 12, 10, 12, 4};
    majority2(arr, 5);
}


#include<iostream>
using namespace std;

void majority2(int arr[], int n) {
    int count1 = 0, count2 = 0;
    int candidate1 = -1, candidate2 = -1;

    // Step 1: Find candidates
    for (int i = 0; i < n; i++) {
        if (arr[i] == candidate1)
            count1++;
        else if (arr[i] == candidate2)
            count2++;
        else if (count1 == 0) {
            candidate1 = arr[i];
            count1 = 1;
        }
        else if (count2 == 0) {
            candidate2 = arr[i];
            count2 = 1;
        }
        else {
            count1--;
            count2--;
        }
    }

    // Step 2: Count actual frequency
    count1 = count2 = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] == candidate1) count1++;
        else if (arr[i] == candidate2) count2++;
    }

    // Step 3: Print results
    if (count1 > n / 3) cout << candidate1 << endl;
    if (count2 > n / 3) cout << candidate2 << endl;
}

int main() {
    int arr[5] = {10, 12, 10, 12, 4};
    majority2(arr, 5);
}