#include<iostream>
#include<vector>
using namespace std;

int removeDuplicates(vector<int>& arr) {
    int n = arr.size();
    if(n == 0) return 0;

    int i = 0; 
    for(int j = 1; j < n; j++) {
        if(arr[j] != arr[i]) {
            i++;         
            arr[i] = arr[j]; 
        }
    }

    return i + 1; 
}

int main() {
    vector<int> arr = {1, 1, 2, 2, 3, 4, 4, 4, 5};
    int new_len = removeDuplicates(arr);

    cout << "Array after removing duplicates: ";
    for(int i = 0; i < new_len; i++) {
        cout << arr[i] << " ";
    }

    cout << "\nLength = " << new_len << endl;
    return 0;
}