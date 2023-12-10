//longest string chain
//a b ba bca bda bdac
#include<bits/stdc++.h>
using namespace std;
int main(){
vector<int>vec{2,2,2,2,2};
int upper = upper_bound(vec.begin(), vec.end(), 3)-vec.begin();
int lower = lower_bound(vec.begin(), vec.end(), 3) - vec.begin();
cout << lower << upper << endl;
return 0;
}