#include<iostream>
using namespace std;

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