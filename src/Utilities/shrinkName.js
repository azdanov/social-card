// @flow

export default function shrinkName(name: string): string {
  return name.replace(/[\s.,]/g, '');
}
