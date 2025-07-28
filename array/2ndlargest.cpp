#include<iostream>
#include<vector>
#include<climits>
using namespace std;

int sec_largest(vector <int> arr, int n) {
    if (arr.size() < 2) {
        return -1;
    }

    int largest = INT_MIN;
    int s_large = INT_MIN;

    for (int i = 0; i < n; i++) {
        if (arr[i] > largest) {
            s_large = largest;
            largest = arr[i];
        }
        else if (arr[i] < largest && arr[i] > s_large) {
            s_large = arr[i];
        }
    }

    return s_large;
}

int main() {
    vector<int> arr = {34, 22, 67, 43, 5, 2};
    int sec = sec_largest(arr, arr.size());
    cout << sec;
    return 0;
}


