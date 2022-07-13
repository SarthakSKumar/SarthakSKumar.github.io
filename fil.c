#include <stdio.h>
union X {
    int i;
    int j;
    double k;
};  // ; compulsory

int main() {
    union X X;
    X.i = 40;
    X.k = 30;
    printf("%d", X.i);
}