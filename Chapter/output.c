#include<stdio.h>
void main()
{
  auto int i=10;
  {
auto int i=20;
printf("%d\n",i); 
  }
  printf("%d\n",i);
}