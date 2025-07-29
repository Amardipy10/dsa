#include<iostream>
using namespace std;

class Node {
public:
    int data;
    Node* next;

    Node(int val) {
        data = val;
        next = NULL;
    }
};

class LinkedList {
public:
    Node* head;

    LinkedList() {
        head = NULL;
    }

    // 1. Insert at head
    void insertAtHead(int val) {
        Node* newNode = new Node(val);
        newNode->next = head;
        head = newNode;
    }

    // 2. Insert at tail
    void insertAtTail(int val) {
        Node* newNode = new Node(val);
        if (!head) {
            head = newNode;
            return;
        }
        Node* temp = head;
        while (temp->next) {
            temp = temp->next;
        }
        temp->next = newNode;
    }

    // 3. Insert at position (1-based)
    void insertAtPosition(int position, int val) {
        if (position <= 1) {
            insertAtHead(val);
            return;
        }

        Node* newNode = new Node(val);
        Node* temp = head;
        int count = 1;

        while (temp != NULL && count < position - 1) {
            temp = temp->next;
            count++;
        }

        if (temp == NULL) {
            insertAtTail(val); // insert at end if position > length
            return;
        }

        newNode->next = temp->next;
        temp->next = newNode;
    }

    // 4. Delete node at position (1-based)
    void deleteAtPosition(int position) {
        if (!head) return;

        if (position == 1) {
            Node* temp = head;
            head = head->next;
            delete temp;
            return;
        }

        Node* prev = NULL;
        Node* curr = head;
        int count = 1;

        while (curr != NULL && count < position) {
            prev = curr;
            curr = curr->next;
            count++;
        }

        if (curr == NULL) return;

        prev->next = curr->next;
        delete curr;
    }

    // 5. Print the list
    void printList() {
        Node* temp = head;
        while (temp != NULL) {
            cout << temp->data << " -> ";
            temp = temp->next;
        }
        cout << "NULL" << endl;
    }

    // 6. Delete entire list
    void deleteList() {
        Node* temp = head;
        while (temp != NULL) {
            Node* nextNode = temp->next;
            delete temp;
            temp = nextNode;
        }
        head = NULL;
    }

    // 7. Reverse the list
    void reverseList() {
        Node* prev = NULL;
        Node* curr = head;
        Node* next = NULL;

        while (curr != NULL) {
            next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }

        head = prev;
    }
};


int main() {
    LinkedList list;

    list.insertAtHead(10);
    list.insertAtTail(20);
    list.insertAtTail(30);
    list.insertAtPosition(2, 15); // Insert 15 at position 2

    cout << "List after insertions: ";
    list.printList();  // 10 -> 15 -> 20 -> 30 -> NULL

    list.deleteAtPosition(3); // Delete 3rd element (20)
    cout << "After deletion at position 3: ";
    list.printList();  // 10 -> 15 -> 30 -> NULL

    list.reverseList();
    cout << "After reversing the list: ";
    list.printList();  // 30 -> 15 -> 10 -> NULL

    list.deleteList();
    cout << "After deleting entire list: ";
    list.printList();  // NULL

    return 0;
}