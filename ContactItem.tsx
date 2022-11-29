import * as React from 'react';
import './style.css';

type Person = {
  name: string;
};

export default function ContactItem({ name }: Person) {
  return <li>{name}</li>;
}
