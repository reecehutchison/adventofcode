#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main() {

    vector<string> codes;
    string code;
    int sum=0;

    while(cin>>code) {
        codes.push_back(code);
    }

    for(const string str : codes) {
        int i=0; 
        int j=str.size();
        while(!isdigit(str[i])) 
            ++i;
        while(!isdigit(str[j]))
            --j;
        int curr=((str[i]-'0')*10)+(str[j]-'0');
        sum+=curr;
    }

    cout << sum << endl;


    return 0;
}
