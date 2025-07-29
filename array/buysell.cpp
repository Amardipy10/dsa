#include<iostream>
#include<climits>
using namespace std;

int maxProfit(int arr[], int n) {
    int min_price = INT_MAX;
    int max_profit = 0;

    for (int i = 0; i < n; i++) {
        if (arr[i] < min_price) {
            min_price = arr[i];  // buy at lowest price so far
        } else {
            int profit = arr[i] - min_price;  // sell today
            if (profit > max_profit) {
                max_profit = profit;
            }
        }
    }

    return max_profit;
}

int main() {
    int arr[6] = {7, 1, 5, 3, 6, 4};
    cout << maxProfit(arr, 6);
}