#include <iostream>
#include <fstream>
#include <string>
#include <map>
#include <thread>
#include <chrono>
#ifdef _WIN32
#include <conio.h> // For getch() on Windows
#include <windows.h>
#endif
using namespace std;

// Function to add colors in console
void setColor(int color) {
#ifdef _WIN32
    SetConsoleTextAttribute(GetStdHandle(STD_OUTPUT_HANDLE), color);
#endif
}

// Function to show loading animation
void loading(string text) {
    cout << text;
    for (int i = 0; i < 3; i++) {
        cout << ".";
        cout.flush();
        this_thread::sleep_for(chrono::milliseconds(400));
    }
    cout << endl;
}

// Function to input password with masking
string inputPassword() {
    string password;
    char ch;
    while (true) {
#ifdef _WIN32
        ch = _getch();
#else
        ch = getchar();
#endif
        if (ch == '\n' || ch == '\r') break; // Enter key
        if (ch == '\b' && !password.empty()) { // Backspace
            cout << "\b \b";
            password.pop_back();
        } else if (isprint(ch)) {
            cout << '*';
            password.push_back(ch);
        }
    }
    cout << endl;
    return password;
}

// Save user credentials to file
void saveUser(string username, string password) {
    ofstream file("users.txt", ios::app);
    file << username << " " << password << endl;
    file.close();
}

// Load all users into map
map<string, string> loadUsers() {
    map<string, string> users;
    ifstream file("users.txt");
    string user, pass;
    while (file >> user >> pass) {
        users[user] = pass;
    }
    file.close();
    return users;
}

int main() {
    int choice;
    string username, password;
    char remember;
    map<string, string> users = loadUsers();

    setColor(11);
    cout << "=====================================\n";
    cout << "         FUTURISTIC LOGIN SYSTEM     \n";
    cout << "=====================================\n";
    setColor(7);

    while (true) {
        cout << "\n1. Sign Up\n2. Login\n3. Exit\n";
        cout << "Enter choice: ";
        cin >> choice;

        if (choice == 1) {
            cout << "\n--- SIGN UP ---\n";
            cout << "Choose a username: ";
            cin >> username;
            cout << "Choose a password: ";
            password = inputPassword();

            if (users.find(username) == users.end()) {
                users[username] = password;
                saveUser(username, password);
                setColor(10);
                cout << "✅ Account created successfully!\n";
            } else {
                setColor(12);
                cout << "❌ Username already exists.\n";
            }
            setColor(7);
        }

        else if (choice == 2) {
            cout << "\n--- LOGIN ---\n";
            cout << "Username: ";
            cin >> username;
            cout << "Password: ";
            password = inputPassword();

            if (users.find(username) != users.end() && users[username] == password) {
                loading("Verifying credentials");
                setColor(10);
                cout << "\n✅ Login Successful! Welcome, " << username << "!\n";
                setColor(7);

                cout << "Remember me? (y/n): ";
                cin >> remember;
                if (remember == 'y' || remember == 'Y')
                    cout << "🔒 Session remembered.\n";

                cout << "\nPress any key to logout...";
#ifdef _WIN32
                _getch();
#else
                getchar();
#endif
            } else {
                setColor(12);
                cout << "\n❌ Invalid Username or Password.\n";
                setColor(7);
            }
        }

        else if (choice == 3) {
            setColor(14);
            cout << "\n👋 Exiting system. Goodbye!\n";
            setColor(7);
            break;
        }

        else {
            setColor(12);
            cout << "❌ Invalid choice. Try again.\n";
            setColor(7);
        }
    }

    return 0;
}
