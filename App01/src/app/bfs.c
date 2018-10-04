#include <stdio.h>
#define TAM 20

    int matriz[TAM][TAM];
    void leitura();
    void zera();
    void imprime(int N);

int main () {

    int N, M;
    scanf("%d %d", &N, &M);
    zera();
    for(int i = 0; i < M; i++) {
        leitura();
    }
    imprime(N);

    return 0;
}

void leitura() {

    int u, v;
    scanf("%d %d", &u, &v);
    matriz[u][v] = 1;
    matriz[v][u] = 1;
}

void zera() {

    for(int i = 0; i < TAM; i++) {
        for(int j = 0; j < TAM; j++) {
            matriz[i][j] = 0;
        }
    }
}

void imprime(int N) {

    for(int i = 0; i < N; i++) {
        for(int j = 0; j < N; j++) {
            printf("%d ", matriz[i][j]);
        }
        printf("\n");
    }
}