#include<iostream>
using namespace std;

int reverse(int n){
    int reve = 0; // ✅ initialize to 0
    while(n > 0){
        int num = n % 10;
        reve = reve * 10 + num;
        n = n / 10;
    }
    return reve;
}

int main(){
    cout << reverse(459); // Output: 954
}