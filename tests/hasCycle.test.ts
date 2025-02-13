import { hasCycle, ListNode } from "../src";

describe("hasCycle", () => {
  it("should return false for an empty list", () => {
    expect(hasCycle(null)).toBe(false);
  });

  it("should return false for a list with no cycle", () => {
    // Create a list: 1 -> 2 -> 3 -> null
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);

    expect(hasCycle(head)).toBe(false);
  });

  it("should return true for a list with a cycle", () => {
    // Create a list with a cycle: 1 -> 2 -> 3 -> 4 -> 2 (cycle back to node 2)
    const head = new ListNode(1);
    const node2 = new ListNode(2);
    const node3 = new ListNode(3);
    const node4 = new ListNode(4);

    head.next = node2;
    node2.next = node3;
    node3.next = node4;
    node4.next = node2; // Cycle created

    expect(hasCycle(head)).toBe(true);
  });

  it("should return true for a single-node list with a cycle", () => {
    // Create a single-node list with a cycle: 1 -> 1 (cycle back to itself)
    const head = new ListNode(1);
    head.next = head; // Cycle created

    expect(hasCycle(head)).toBe(true);
  });

  it("should return false for a single-node list with no cycle", () => {
    // Create a single-node list: 1 -> null
    const head = new ListNode(1);

    expect(hasCycle(head)).toBe(false);
  });

  it("should return true for a large list with a cycle", () => {
    // Create a large list with a cycle: 1 -> 2 -> 3 -> ... -> 10 -> 5 (cycle back to node 5)
    const head = new ListNode(1);
    let current = head;
    let cycleNode: ListNode | null = null;

    for (let i = 2; i <= 10; i++) {
      current.next = new ListNode(i);
      current = current.next;
      if (i === 5) {
        cycleNode = current; // Save the node where the cycle will start
      }
    }

    current.next = cycleNode; // Create the cycle

    expect(hasCycle(head)).toBe(true);
  });
});
